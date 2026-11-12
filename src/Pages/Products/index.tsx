import { useEffect, useState } from "react";
import { Eye, EyeOff, Pencil, Plus, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchProducts } from "../../Redux/products/productActions";
import { removeProduct } from "../../Redux/products/productsSlice";
import { dictionary } from "../../Dictionary";
import Button from "../../Shared/Button";
import SearchBox from "../../Shared/SearchBox";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";
import Notification from "../../Shared/Notification";
import {
  Container,
  Toolbar,
  SearchWrapper,
  ProductImage,
  Status,
  Actions,
  ActionButton,
  Price,
} from "./styles";
import CreateProduct from "../../Modals/CreateProduct";

const pageSize = 5;

function Products() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const language = useAppSelector((state) => state.settings.language);
  const text = dictionary[language].products;

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hiddenIds, setHiddenIds] = useState<number[]>([]);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => setSuccessMessage(""), 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const currentPage = Math.min(page, Math.max(1, totalPages));

  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const columns = [
    { key: "image", title: text.image },
    { key: "title", title: text.title },
    { key: "price", title: text.price },
    { key: "status", title: text.status },
    { key: "actions", title: text.actions },
  ];

  function toggleVisibility(id: number) {
    setHiddenIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <Container>
      <Toolbar>
        <Button
          rightIcon={<Plus size={18} />}
          onClick={() => {
            setSuccessMessage("");
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
        label={dictionary[language].navigation.products}
        loading={loading}
        error={error ? text.error : undefined}
        empty={visibleProducts.length === 0}
        emptyMessage={text.empty}
      >
        {visibleProducts.map((product) => {
          const hidden = hiddenIds.includes(product.id);

          return (
            <tr key={product.id}>
              <td>
                <ProductImage src={product.image} alt={product.title} />
              </td>

              <td>{product.title}</td>

              <td>
                <Price>
                  <span dir="ltr">
                    {Number(product.price).toLocaleString("en-US")}
                  </span>
                  <span>{text.currency}</span>
                </Price>
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
                    onClick={() => dispatch(removeProduct(product.id))}
                  >
                    <Trash2 size={17} />
                  </ActionButton>

                  <ActionButton
                    type="button"
                    title={hidden ? text.show : text.hide}
                    onClick={() => toggleVisibility(product.id)}
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
        <CreateProduct
          onClose={() => setCreateModalOpen(false)}
          onCreated={() => {
            setSearch("");
            setPage(1);
            setSuccessMessage(text.created);
          }}
        />
      )}
    </Container>
  );
}

export default Products;
