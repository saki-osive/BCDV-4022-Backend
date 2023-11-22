import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from "./Title";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, MenuItem, Select} from "@mui/material";

export default function Wallet() {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [addresses, setAddresses] = useState([]);
    const [balance, setBalance] = useState(null);
    const [showBalance, setShowBalance] = useState(false);

    useEffect(() => {
        // Fetch addresses on component mount (Lifecycle method)
        const fetchAddresses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/accounts');
                setAddresses(response.data);
                // Set the default selected address to the first address in the list
                if (response.data.length > 0) {
                    setSelectedAddress(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching addresses:', error);
            }
        };

        fetchAddresses();
    }, []);

    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
    };

    const handleViewBalance = async () => {
        try {
            // Fetch balance for the selected address
            const response = await axios.get(`http://localhost:3000/accounts/${selectedAddress}/balance`);
            setBalance(response.data.balance);
            setShowBalance(true);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    return (
        <React.Fragment>
            <Title>My Wallet</Title>
            <Typography component="p" variant="h4">
                {showBalance && balance !== null ? `${balance} ETH` : 'Select Address'}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 25 October, 2023
            </Typography>
            <Typography component="p" variant="subtitle2">
                Address:
            </Typography>
            <Select value={selectedAddress} onChange={handleAddressChange}>
                {addresses.map((address) => (
                    <MenuItem key={address} value={address}>
                        {address}
                    </MenuItem>
                ))}
            </Select>
            <div style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleViewBalance}>
                    View balance
                </Button>
            </div>
        </React.Fragment>
    );
}