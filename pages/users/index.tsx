/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => (
        <div key={user.id} className={styles.card} onClick={() => router.push(`/users/${user.id}`)}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();

  return {
    props: {
      dataUsers,
    },
  };
}
