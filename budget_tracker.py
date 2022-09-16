import pandas as pd


def read_budget(file_name_or_path: str) -> pd:
    df = pd.read_csv(file_name_or_path)
    return df


def write_budget(df_name: str, file_name: str) -> None:
    df_name.to_csv(f'{file_name}.csv')
    return True

def budget_month(rent: int = 0, food: int = 0, exercise: int = 0, subscriptions: int = 0, utilities: int = 0, books: int = 0, entertainment: int = 0):
    """
    - Calculate daily spending
    - Calculate yearly spending
    """
    budget_df = pd.DataFrame({
        "rent": rent,
        "food": food,
        "exercise": exercise,
        "utilities": utilities,
        "subscriptions": subscriptions,
        "books": books,
        "total": rent + food + exercise + utilities + subscriptions + books
    }, index=[0])
    return budget_df


my_budget = budget_month(650, 400, 65, 10, 20)
#write_budget(my_budget, 'september_budget')
get_budget = read_budget('september_budget.csv')
print(get_budget)






