import { gql } from "@apollo/client";

export const CREATE_DOCTOR = gql`
  mutation CreateDoctor(
    $name: String!
    $surname: String!
    $email: String!
    $gender: DoctorGenderType!
    $specialty: DoctorSpecialtyType!
  ) {
    createDoctor(data: { name: $name, surname: $surname, email: $email, gender: $gender, specialty: $specialty }) {
      name
      surname
    }
  }
`;
