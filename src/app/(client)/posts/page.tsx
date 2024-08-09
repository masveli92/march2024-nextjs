import {getAllUsers} from "@/services/api.service";
import {log} from "node:util";

const Page = async () => {
    let users = await getAllUsers();

    return (
        <div>
          Posts Page
        </div>
    );
};

export default Page;