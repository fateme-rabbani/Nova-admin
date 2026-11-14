# NOVA Admin

An admin panel built with React, TypeScript and Vite. Features include authentication, product and user lists, search, pagination, creation forms, local deletion, visibility controls, Persian/English support and light/dark themes. Styling uses Styled Components.

Time spent: approximately *20–22 hours*.

## Prerequisites

- Node.js 22 (22.13 or later) or Node.js 24
- npm
- Internet access for installing dependencies and making API requests

## Installation and development

From the project root:

```bash
npm install
```

Copy `.env.example` to `.env`. The API base URL should be:

```dotenv
VITE_API_BASE_URL=https://fakestoreapi.com
```

Start the development server:

```bash
npm run dev
```

Open the URL printed in the terminal. Restart the development server after changing `.env`.

## Build and checks

```bash
npm run build
npm run lint
npm run preview
```

The build output is generated in `dist`. The preview command serves that output locally.

## Demo account

Use this public FakeStoreAPI test account to sign in:

```text
Username: mor_2314
Password: 83r5^_
```

## API limitations and implementation decisions

The project uses [FakeStoreAPI](https://fakestoreapi.com/), a mock API whose create, update and delete operations do not persist changes to its database.

| Topic | API behavior and implementation |

| Creating products and users | The form sends a POST request. After success, the submitted values and the ID returned by the API are added to Redux so the new record appears immediately. |
| Deletion | The API supports DELETE requests without permanently deleting records. This project removes records from Redux locally without sending a DELETE request. |
| Visibility | Visibility is managed locally in each page. The control changes the row's status and icon; the row remains in the admin table. No API request is sent. |
| Refreshing and navigation | Entering a list page fetches its data again. Locally created or deleted records and visibility changes are reset when leaving and returning to the page, or refreshing the browser. |
| Product images | The API accepts an image URL and does not provide a documented file upload endpoint. The form therefore accepts an image link. The preview updates when the image field loses focus to avoid flickering while typing. A valid URL must also point to an image accessible by the browser. |
| New user login | Newly created users cannot sign in because the API does not save their accounts. Use an existing demo account. |
| Search and pagination | Both run in the browser on the fetched list, with up to five records per page. |
| Language and prices | Translations apply to the interface; API product names and categories retain their original text. Prices use thousands separators and a translated Toman label, without currency conversion. |

Categories are fetched separately from `/products/categories` so the creation form still has category options when the product list is empty.

The API can return duplicate IDs for newly created products. The current implementation uses the returned ID without resolving collisions.

## State management

Redux Toolkit manages shared application state:

- `products` and `users`: fetched records, loading state and request errors.
- `auth`: the token and username.
- `settings`: language and theme.

Page-specific state, including search text, page number, modal visibility, notifications and hidden row IDs, uses `useState`. Forms use Formik, with Yup schemas for validation. Passwords from user-list responses are excluded before storing users in Redux.

## API communication and authentication

Services use a shared Axios instance configured with `VITE_API_BASE_URL`. List actions manage loading, success and error state in Redux. Creation forms call their services and add the new record to Redux after a successful response.

Login sends credentials to `/auth/login`. The token and username are stored in `sessionStorage` to preserve the session when refreshing the same tab. The token is attached to subsequent requests through the `Authorization` header, except for the login request.

For this demo, tokens are stored in `sessionStorage`, which is accessible to JavaScript and vulnerable to token theft through XSS. A production application should use a backend-managed `HttpOnly` cookie with appropriate security settings; this requires backend support beyond the current API integration.

Admin routes check for a token and redirect unauthenticated visitors to the login page. Successful login opens the products page. Signing out, or receiving an HTTP 401 response from a request other than login, clears the session and the product and user lists.

Route protection applies to the interface. The mock API exposes public product and user endpoints and does not enforce a separate administrator role on these routes.

## Folder structure

| Folder | Purpose |

| `src/Pages` | Login, products and users pages |
| `src/Components` | Feature-specific components such as the login form |
| `src/Shared` | Reusable UI, layout, header and theme definitions |
| `src/Modals` | Product and user creation forms built with the shared modal |
| `src/Redux` | Store, slices, actions and typed Redux hooks |
| `src/Utils/api` | Axios configuration, authentication interceptors and API error handling |
| `src/Utils/services` | Authentication, product, category and user requests |
| `src/Routes` | Route definitions and protected routes |
| `src/Dictionary` | Persian and English interface text |
| `src/Validations` | Yup form validation schemas |
| `src/Storage` | Reading, saving and clearing the authentication session |
| `src/types` | Data models and TypeScript declarations |
| `src/assets` | Static assets such as logos |
