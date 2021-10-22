type UserType = {
  id: number;
  name: string;
};

type Company = {
  id: number;
  name: string;
};

type User = {
  id: number;
  name: string;
  userType: UserType;
  company: Company;
};

const validateUserObj = (row: any): boolean => {
  if (row.id && row.name, row.user_type_id, row.company_id) {
    return true;
  } else {
    return false;
  }
}

export { UserType, Company, User, validateUserObj };
