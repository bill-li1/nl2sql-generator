export interface CodeSchema {
  name: string
  sql: string
}

export interface RowType {
  name: string
  type: string
  isPrimaryKey?: boolean
  foreignKey?: string
}

export interface TableType {
  name: string
  rows: Array<RowType>
}

export const CODE_SCHEMAS: Array<CodeSchema> = [
  {
    name: "categories",
    sql: `
CREATE TABLE categories (
  category_id    INTEGER PRIMARY KEY,
  category_name  TEXT NOT NULL
);
`,
  },
  {
    name: "brands",
    sql: `
CREATE TABLE brands (
  brand_id    INTEGER PRIMARY KEY,
  brand_name  TEXT NOT NULL
);
`,
  },
  {
    name: "products",
    sql: `
CREATE TABLE products (
  product_id    INTEGER PRIMARY KEY,
  product_name  TEXT NOT NULL,
  brand_id      INTEGER NOT NULL,
  category_id   INTEGER NOT NULL,
  list_price    REAL NOT NULL,
  FOREIGN KEY (brand_id) REFERENCES brands
  FOREIGN KEY (category_id) REFERENCES categories
);
`,
  },
  {
    name: "customers",
    sql: `
CREATE TABLE customers (
  customer_id  INTEGER PRIMARY KEY,
  first_name   TEXT NOT NULL,
  last_name    TEXT NOT NULL,
  phone        TEXT,
  email        TEXT NOT NULL,
  zip_code     TEXT
);
`,
  },
  {
    name: "stores",
    sql: `
CREATE TABLE stores (
  store_id    INTEGER PRIMARY KEY,
  store_name  TEXT NOT NULL,
  phone       TEXT,
  email       TEXT,
  zip_code    TEXT
);
`,
  },
  {
    name: "staffs",
    sql: `
CREATE TABLE staffs (
  staff_id    INTEGER PRIMARY KEY,
  first_name  TEXT NOT NULL,
  last_name   TEXT NOT NULL,
  phone       TEXT,
  store_id    INTEGER NOT NULL,
  manager_id  INTEGER,
  FOREIGN KEY (store_id) REFERENCES stores,
  FOREIGN KEY (manager_id) REFERENCES staffs
);
`,
  },
  {
    name: "orders",
    sql: `
CREATE TABLE orders (
  order_id      INTEGER PRIMARY KEY,
  customer_id   INTEGER,
  order_status  INTEGER NOT NULL,
  order_date    DATE NOT NULL,
  store_id      INTEGER NOT NULL,
  staff_id      INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers,
  FOREIGN KEY (store_id) REFERENCES stores,
  FOREIGN KEY (staff_id) REFERENCES staffs
);
`,
  },
  {
    name: "order_items",
    sql: `
CREATE TABLE order_items (
  order_id    INTEGER,
  item_id     INTEGER,
  product_id  INTEGER NOT NULL,
  quantity    INTEGER NOT NULL,
  PRIMARY KEY (order_id, item_id),
  FOREIGN KEY (order_id) REFERENCES orders,
  FOREIGN KEY (product_id) REFERENCES products
);
`,
  },
  {
    name: "stocks",
    sql: `
CREATE TABLE stocks (
  store_id    INTEGER,
  product_id  INTEGER,
  quantity    INTEGER,
  PRIMARY KEY (store_id, product_id),
  FOREIGN KEY (store_id) REFERENCES stores,
  FOREIGN KEY (product_id) REFERENCES products
);
`,
  },
]

export const schemaData: Array<TableType> = [
  {
    name: "categories",
    rows: [
      { name: "category_id", type: "INTEGER", isPrimaryKey: true },
      { name: "category_name", type: "TEXT" },
    ],
  },
  {
    name: "brands",
    rows: [
      { name: "brand_id", type: "INTEGER", isPrimaryKey: true },
      { name: "brand_name", type: "TEXT" },
    ],
  },
  {
    name: "products",
    rows: [
      { name: "product_id", type: "INTEGER", isPrimaryKey: true },
      { name: "product_name", type: "TEXT" },
      { name: "brand_id", type: "INTEGER", foreignKey: "brands" },
      {
        name: "category_id",
        type: "INTEGER",
        foreignKey: "categories",
      },
      { name: "list_price", type: "REAL" },
    ],
  },
  {
    name: "customers",
    rows: [
      { name: "customer_id", type: "INTEGER", isPrimaryKey: true },
      { name: "first_name", type: "TEXT" },
      { name: "last_name", type: "TEXT" },
      { name: "phone", type: "TEXT" },
      { name: "email", type: "TEXT" },
      { name: "zip_code", type: "TEXT" },
    ],
  },
  {
    name: "stores",
    rows: [
      { name: "store_id", type: "INTEGER", isPrimaryKey: true },
      { name: "store_name", type: "TEXT" },
      { name: "phone", type: "TEXT" },
      { name: "email", type: "TEXT" },
      { name: "zip_code", type: "TEXT" },
    ],
  },
  {
    name: "staffs",
    rows: [
      { name: "staff_id", type: "INTEGER", isPrimaryKey: true },
      { name: "first_name", type: "TEXT" },
      { name: "last_name", type: "TEXT" },
      { name: "phone", type: "TEXT" },
      { name: "store_id", type: "INTEGER", foreignKey: "stores" },
      { name: "manager_id", type: "INTEGER", foreignKey: "staffs" },
    ],
  },
  {
    name: "orders",
    rows: [
      { name: "order_id", type: "INTEGER", isPrimaryKey: true },
      {
        name: "customer_id",
        type: "INTEGER",
        foreignKey: "customers",
      },
      { name: "order_status", type: "INTEGER" },
      { name: "order_date", type: "DATE" },
      { name: "store_id", type: "INTEGER", foreignKey: "stores" },
      { name: "staff_id", type: "INTEGER", foreignKey: "staffs" },
    ],
  },
  {
    name: "order_items",
    rows: [
      {
        name: "order_id",
        type: "INTEGER",
        isPrimaryKey: true,
        foreignKey: "orders",
      },
      { name: "item_id", type: "INTEGER", isPrimaryKey: true },
      {
        name: "product_id",
        type: "INTEGER",
        foreignKey: "products",
      },
      { name: "quantity", type: "INTEGER" },
    ],
  },
  {
    name: "stocks",
    rows: [
      {
        name: "store_id",
        type: "INTEGER",
        isPrimaryKey: true,
        foreignKey: "stores",
      },
      {
        name: "product_id",
        type: "INTEGER",
        isPrimaryKey: true,
        foreignKey: "products",
      },
      { name: "quantity", type: "INTEGER" },
    ],
  },
]
