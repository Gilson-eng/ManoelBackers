import { Table } from "react-bootstrap";

const TabelaCustomizada = ({ columns = {}, rows = []}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {Object.values(columns).map((col) => {
                        return <th>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, ind) => {
                    return (
                        <tr key={ind}>
                            {Object.values(row).map((row2, ind2) => {
                                return <td key={ind2}>{row2}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default TabelaCustomizada;

