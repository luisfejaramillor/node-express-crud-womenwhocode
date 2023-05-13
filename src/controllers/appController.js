export const healthCheck = (_, res) => {
    res.json({ status: 'ok' });
};

export const welcomePage = (_, res) => {
    res.send("Welcome!")
};