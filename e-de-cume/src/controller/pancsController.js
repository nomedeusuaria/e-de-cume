const PancsModel = require("../models/pancsModel");

const createPancs = async (req, res) => {
    try {
        const { cientificName, popularName, area, edibleParts } = req.body;

        const newPancs = new PancsModel({ 
            cientificName, popularName, area, edibleParts 
        })
        const savedPancs = await newPancs.save()

        res.status(201).json(savedPancs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
};

const findAllPancs = async (req, res) => {
    try {
        const allPancs = await PancsModel.find()
        res.status(200).json(allPancs)
    } catch(error) {
        res.status(500).json({ message: error.message})
    }
};

const findPancsById = async (req, res) => {
    try {
        const findPanc = await PancsModel.findById(req.params.id)
        
        if(findPanc == null) {
            return res.status(404).json({ message: "Panc not found. Is this correct Id?"})
        }
        res.status(200).json({findPanc})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
};

/*const findPancsByArea = async (req, res) => {
    try {
        const { area } = req.query
        const findArea = await pancsCollection.find({ area: area });

        if (findArea == null) {
            return res.status(404).json({ message: "Area not found. Please try again."})
        }
        res.status(200).json(findArea)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
};

//const findPancsByPopularName = async (req, res) => {
    try {
        const { popularName: popularName } = req.query
        const findPopularName = await PancsModel.find({ popularName: popularName})

        if (findPopularName == null) {
            return res.status(404).json({ message: "Could not find popular name."})
        }
        res.status(200).json(findPopularName)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
};*/

const updatePanc = async (req, res) => {
    try {
        const { cientificName, popularName, area, edibleParts } = req.body
        const updatePanc = await PancsModel.findByIdAndUpdate(req.params.id, {
            cientificName, popularName, area, edibleParts
        })
        res.status(200).json(updatePanc)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
};

const deletePancById = async (req, res) => {
    try{
        const { id } = req.params
        const deletePanc = await PancsModel.findByIdAndDelete(id)
        
        if (deletePanc == null) {
            return res.status(404).json({ message:
            `The panc with the ${id} was not found.`})
        }
        await deletePanc.remove()

        res.status(200).json({ message: `${deletePanc} was sucessfully deleted.`})
    } catch(error) {
        res.status(500).json({ message: error.message})
    }
};

module.exports = {
    createPancs,
    findAllPancs,
    findPancsById,
    findPancsByArea,
    findPancsByPopularName,
    updatePanc,
    deletePancById
}