export interface CodeSchema {
  name: string
  sql: string
}

export const codeSchemas: Array<CodeSchema> = [
  {
    name: "classroom",
    sql: `CREATE TABLE classroom (
  building    varchar(15),
  room_number varchar(7),
  capacity    numeric(4,0),
  primary key (building, room_number)
);`,
  },
  {
    name: "department",
    sql: `CREATE TABLE department (
  dept_name varchar(20),
  building  varchar(15),
  budget    numeric(12,2) check (budget > 0),
  primary key (dept_name)
);`,
  },
  {
    name: "course",
    sql: `CREATE TABLE course (
  course_id varchar(8),
  title     varchar(50),
  dept_name varchar(20),
  credits   numeric(2,0) check (credits > 0),
  primary key (course_id),
  foreign key (dept_name) references department on delete set null
);`,
  },
  {
    name: "classroom 1",
    sql: `CREATE TABLE classroom (
  building    varchar(15),
  room_number varchar(7),
  capacity    numeric(4,0),
  primary key (building, room_number)
);`,
  },
  {
    name: "department 1",
    sql: `CREATE TABLE department (
  dept_name varchar(20),
  building  varchar(15),
  budget    numeric(12,2) check (budget > 0),
  primary key (dept_name)
);`,
  },
  {
    name: "course 1",
    sql: `CREATE TABLE course (
  course_id varchar(8),
  title     varchar(50),
  dept_name varchar(20),
  credits   numeric(2,0) check (credits > 0),
  primary key (course_id),
  foreign key (dept_name) references department on delete set null
);`,
  },
  {
    name: "classroom 2",
    sql: `CREATE TABLE classroom (
  building    varchar(15),
  room_number varchar(7),
  capacity    numeric(4,0),
  primary key (building, room_number)
);`,
  },
  {
    name: "department 2",
    sql: `CREATE TABLE department (
  dept_name varchar(20),
  building  varchar(15),
  budget    numeric(12,2) check (budget > 0),
  primary key (dept_name)
);`,
  },
  {
    name: "course 2",
    sql: `CREATE TABLE course (
  course_id varchar(8),
  title     varchar(50),
  dept_name varchar(20),
  credits   numeric(2,0) check (credits > 0),
  primary key (course_id),
  this is a really long line that should be wrapping i don't know what is going on here
);`,
  },
]

interface ColumnType {
  name: string
  type: string
  numeric: number[]
  isPrimaryKey?: boolean
  isForeignKey?: boolean
}

interface TableType {
  name: string
  columns: ColumnType[]
}

// Convert our SQL schema data into a more structured format for visualization
export const schemaData: TableType[] = [
  {
    name: "classroom",
    columns: [
      {
        name: "building",
        type: "varchar",
        numeric: [15],
        isPrimaryKey: true,
      },
      {
        name: "room_number",
        type: "varchar",
        numeric: [7],
        isPrimaryKey: true,
      },
      { name: "capacity", type: "numeric", numeric: [4, 0] },
    ],
  },
  {
    name: "department",
    columns: [
      {
        name: "dept_name",
        type: "varchar",
        numeric: [20],
        isPrimaryKey: true,
      },
      { name: "building", type: "varchar", numeric: [15] },
      { name: "budget", type: "numeric", numeric: [12, 2] },
    ],
  },
  {
    name: "course",
    columns: [
      {
        name: "course_id",
        type: "varchar",
        numeric: [8],
        isPrimaryKey: true,
      },
      { name: "title", type: "varchar", numeric: [50] },
      {
        name: "dept_name",
        type: "varchar",
        numeric: [20],
        isForeignKey: true,
      },
      { name: "credits", type: "numeric", numeric: [2, 0] },
    ],
  },
  {
    name: "instructor",
    columns: [
      { name: "ID", type: "varchar", numeric: [5], isPrimaryKey: true },
      { name: "name", type: "varchar", numeric: [20] },
      {
        name: "dept_name",
        type: "varchar",
        numeric: [20],
        isForeignKey: true,
      },
      { name: "salary", type: "numeric", numeric: [8, 2] },
    ],
  },
  {
    name: "section",
    columns: [
      {
        name: "course_id",
        type: "varchar",
        numeric: [8],
        isPrimaryKey: true,
        isForeignKey: true,
      },
      { name: "sec_id", type: "varchar", numeric: [8], isPrimaryKey: true },
      {
        name: "semester",
        type: "varchar",
        numeric: [6],
        isPrimaryKey: true,
      },
      {
        name: "year",
        type: "numeric",
        numeric: [4, 0],
        isPrimaryKey: true,
      },
      {
        name: "building",
        type: "varchar",
        numeric: [15],
        isForeignKey: true,
      },
      {
        name: "room_number",
        type: "varchar",
        numeric: [7],
        isForeignKey: true,
      },
      { name: "time_slot_id", type: "varchar", numeric: [4] },
    ],
  },
]
