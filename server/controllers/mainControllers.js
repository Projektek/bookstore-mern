const getMain = (req, res) => {
    try {
        res.status(200).json({
            msg: 'A main route-on vagy, amit a controller-ben állítottunk be!',
        });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem jó a main route-on!' });
    }
};

module.exports = { getMain };
