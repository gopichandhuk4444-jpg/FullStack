import psycopg2
# Database connection parameters
DB_PARAMS = {
    'dbname': 'your_dbname',
    'user': 'your_username',
    'password': 'your_password',
    'host': 'localhost',
    'port': 5432
}

def connect():
    """Create and return a new database connection and cursor."""
    conn = psycopg2.connect(**DB_PARAMS)
    cursor = conn.cursor()
    return conn, cursor

def create_table():
    """Create a sample table."""
    conn, cur = connect()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS employees (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            department VARCHAR(50),
            salary NUMERIC
        )
    """)
    conn.commit()
    cur.close()
    conn.close()

def insert_employee(name, department, salary):
    """Insert a single employee."""
    conn, cur = connect()
    cur.execute(
        "INSERT INTO employees (name, department, salary) VALUES (%s, %s, %s)",
        (name, department, salary)
    )
    conn.commit()
    cur.close()
    conn.close()

def insert_multiple_employees(employee_list):
    """Insert multiple employees at once."""
    conn, cur = connect()
    # employee_list is a list of tuples: [(name, department, salary), ...]
    cur.executemany(
        "INSERT INTO employees (name, department, salary) VALUES (%s, %s, %s)",
        employee_list
    )
    conn.commit()
    cur.close()
    conn.close()

def get_all_employees():
    """Select all employees."""
    conn, cur = connect()
    cur.execute("SELECT * FROM employees")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return rows

def get_employees_by_department(department):
    """Select employees filtered by department."""
    conn, cur = connect()
    cur.execute("SELECT * FROM employees WHERE department = %s", (department,))
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return rows

def update_employee_salary(employee_id, new_salary):
    """Update salary of an employee by id."""
    conn, cur = connect()
    cur.execute(
        "UPDATE employees SET salary = %s WHERE id = %s",
        (new_salary, employee_id)
    )
    conn.commit()
    cur.close()
    conn.close()

def delete_employee(employee_id):
    """Delete an employee by id."""
    conn, cur = connect()
    cur.execute("DELETE FROM employees WHERE id = %s", (employee_id,))
    conn.commit()
    cur.close()
    conn.close()

if __name__ == "__main__":
    # Create table
    create_table()

    # Insert single employee
    insert_employee('Alice', 'Engineering', 90000)

    # Insert multiple employees
    employees = [
        ('Bob', 'Marketing', 60000),
        ('Charlie', 'Engineering', 95000),
        ('Diana', 'HR', 70000)
    ]
    insert_multiple_employees(employees)

    # Read all employees
    all_emps = get_all_employees()
    print("All employees:")
    for emp in all_emps:
        print(emp)

    # Read employees by department
    eng_emps = get_employees_by_department('Engineering')
    print("\nEngineering employees:")
    for emp in eng_emps:
        print(emp)

    # Update salary
    update_employee_salary(employee_id=1, new_salary=92000)

    # Delete an employee
    delete_employee(employee_id=2)

    # Final list
    print("\nEmployees after update and delete:")
    for emp in get_all_employees():
        print(emp)
