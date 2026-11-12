import { useEffect, useState } from "react";
import { Eye, EyeOff, Pencil, Plus, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchUsers } from "../../Redux/users/userActions";
import { removeUser } from "../../Redux/users/usersSlice";
import { dictionary } from "../../Dictionary";
import Button from "../../Shared/Button";
import SearchBox from "../../Shared/SearchBox";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";
import Notification from "../../Shared/Notification";
import CreateUser from "../../Modals/CreateUser";
import {
  Container,
  Toolbar,
  SearchWrapper,
  Status,
  Actions,
  ActionButton,
} from "./styles";

const pageSize = 5;

function Users() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.users);
  const language = useAppSelector((state) => state.settings.language);
  const text = dictionary[language].users;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hiddenIds, setHiddenIds] = useState<number[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [notificationId, setNotificationId] = useState(0);

  useEffect(() => {
    fetchUsers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => setSuccessMessage(""), 3000);

    return () => clearTimeout(timer);
  }, [successMessage, notificationId]);

  const query = search.trim().toLowerCase();

  const filteredUsers = items.filter((user) =>
    `${user.name.firstname} ${user.name.lastname} ${user.username} ${user.email} ${user.phone}`
      .toLowerCase()
      .includes(query),
  );

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  const visibleUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const columns = [
    { key: "name", title: text.name },
    { key: "username", title: text.username },
    { key: "email", title: text.email },
    { key: "phone", title: text.phone },
    { key: "status", title: text.status },
    { key: "actions", title: text.actions },
  ];

  function showNotification(message: string) {
    setSuccessMessage(message);
    setNotificationId((current) => current + 1);
  }

  function handleDelete(id: number) {
    dispatch(removeUser(id));
    showNotification(text.deleted);
  }

  function toggleVisibility(id: number) {
    const hidden = hiddenIds.includes(id);
    setHiddenIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
    showNotification(hidden ? text.shown : text.hiddenSuccess);
  }

  return (
    <Container>
      <Toolbar>
        <Button
          rightIcon={<Plus size={18} />}
          onClick={() => {
            setCreateModalOpen(true);
          }}
        >
          {text.create}
        </Button>
        <SearchWrapper>
          <SearchBox
            value={search}
            label={text.search}
            placeholder={text.searchPlaceholder}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
          />
        </SearchWrapper>
      </Toolbar>

      {successMessage && (
        <Notification
          message={successMessage}
          onClose={() => setSuccessMessage("")}
        />
      )}

      <Table
        columns={columns}
        label={dictionary[language].navigation.users}
        loading={loading}
        error={error ? text.error : undefined}
        empty={visibleUsers.length === 0}
        emptyMessage={text.empty}
      >
        {visibleUsers.map((user) => {
          const hidden = hiddenIds.includes(user.id);
          return (
            <tr key={user.id}>
              <td>
                {user.name.firstname} {user.name.lastname}
              </td>
              <td>
                <span dir="ltr">{user.username}</span>
              </td>
              <td>
                <span dir="ltr">{user.email}</span>
              </td>
              <td>
                <span dir="ltr">{user.phone}</span>
              </td>
              <td>
                <Status className={hidden ? "hidden" : ""}>
                  {hidden ? text.hidden : text.visible}
                </Status>
              </td>
              <td>
                <Actions>
                  <ActionButton type="button" title={text.edit} disabled>
                    <Pencil size={17} />
                  </ActionButton>
                  <ActionButton
                    type="button"
                    className="delete"
                    title={text.remove}
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 size={17} />
                  </ActionButton>
                  <ActionButton
                    type="button"
                    title={hidden ? text.show : text.hide}
                    onClick={() => toggleVisibility(user.id)}
                  >
                    {hidden ? <Eye size={17} /> : <EyeOff size={17} />}
                  </ActionButton>
                </Actions>
              </td>
            </tr>
          );
        })}
      </Table>

      {!loading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
          previousLabel={text.previous}
          nextLabel={text.next}
        />
      )}

      {createModalOpen && (
        <CreateUser
          onClose={() => setCreateModalOpen(false)}
          onCreated={() => {
            setSearch("");
            setPage(1);
            showNotification(text.created);
          }}
        />
      )}
    </Container>
  );
}

export default Users;
