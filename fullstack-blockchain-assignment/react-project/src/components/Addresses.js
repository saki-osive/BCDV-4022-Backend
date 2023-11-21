import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "./Title";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Addresses() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/accounts');
                setAccounts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Generate Addresses Data Fetched from Ganache
    function createData(id, address) {
        return { id, address };
    }

    // Map over the fetched addresses and create rows
    const rows = accounts.map((account, index) => createData(index, account));

    return (
        <React.Fragment >
            <Title>Blockchain Node Addresses</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Select Address to Transfer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Link to={`/transfer/${row.address}`}>
                                    {row.address}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}