
const UserPage = ({searchParams}: any) => {

    let user = JSON.parse(searchParams.data);
    return (
        <div>
           <div>ID: {user.id}</div>
           <div>NAME: {user.name}</div>
           <div>EMAIL: {user.email}</div>

        </div>
    );
};

export default UserPage;

