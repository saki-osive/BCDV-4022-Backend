import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "./Title";
import {useEffect, useState} from "react";
import axios from "axios";

function preventDefault(event) {
    event.preventDefault();
}

export default function Transactions() {

    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/transactions/history'); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint

                setTransactionData(response.data);
            } catch (error) {
                console.error('Error fetching transaction data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <Title>Recent Transactions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Source</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Gas Used</TableCell>
                        <TableCell>Receipt Hash</TableCell>
                        <TableCell align="right">Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.source}</TableCell>
                            <TableCell>{row.destination}</TableCell>
                            <TableCell>{`${row.amount} ETH`}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.gasUsed}</TableCell>
                            <TableCell>{row.receiptHash}</TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more transactions
            </Link>
        </React.Fragment>
    );
}