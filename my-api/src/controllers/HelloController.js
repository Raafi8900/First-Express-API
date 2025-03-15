exports.Hello = (req, res) => {
    res.status(200).json({ 
        status: "success", 
        data: "Hello, this is my first Express REST API" 
    });
};
