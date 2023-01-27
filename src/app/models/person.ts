export interface Person {
  fullname: string,
  email: string
}

export interface PersonResponse {
  fullname: string
}

export interface PeopleListResponse {
  data: PersonResponse[];
}
