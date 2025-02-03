import { page1 , page2 , page3 } from "./file2";
import { page4 , page5 } from "./file4";
import { UserProvider } from "./file1";
import { useState } from "react";

const SelectPage = ({i}) => {
    const Page = [page1, page2, page3, page4, page5][i];
    return <Page/>;
}

export default const useContextExample = () => {
    const [currenPage, setcurrenPage] = useState(0);
    return (
        <UserProvider>
            <button onClick={() => setcurrenPage(0)} disabled={currenPage === 0}>Page 1</button><br />
            <button onClick={() => setcurrenPage(1)} disabled={currenPage === 1}>Page 2</button><br />
            <button onClick={() => setcurrenPage(2)} disabled={currenPage === 2}>Page 3</button><br />
            <button onClick={() => setcurrenPage(3)} disabled={currenPage === 3}>Page 4</button><br />
            <button onClick={() => setcurrenPage(4)} disabled={currenPage === 4}>Page 5</button><br />
            <SelectPage i={currenPage} />
        </UserProvider>
    )
}