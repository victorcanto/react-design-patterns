import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchUsers } from "../../api/users/users-api";

interface User {
  id: string;
  name: string;
  email: string;
}

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const initFetchUsers = async () => {
    const response = await fetchUsers();
    const users = await response.data;
    setUsers(users);
  };

  return {
    users,
    initFetchUsers,
  };
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

function Users() {
  const { users, initFetchUsers } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>Fetch Users</FetchButton>
      <FlexContainer>
        <ContentContainer>
          {users
            ? users.map((user) => (
                <React.Fragment key={user.id}>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </React.Fragment>
              ))
            : null}
        </ContentContainer>
      </FlexContainer>
    </Container>
  );
}
export default Users;
