import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, Paper, Container } from '@mui/material';

const App = () => {
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

    return (
        <Container maxWidth="md" style={{ marginTop: 20 }}>
            <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h4" gutterBottom>
                    Accounts
                </Typography>
                <List>
                    {accounts.map((account, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={account} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default App;
