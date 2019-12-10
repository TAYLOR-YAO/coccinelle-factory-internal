const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({

    mainDeuvre:{
        type:Number,
        required:true
    },
    imageDuTissu:{
        type:String,
        required:true
    },
    prixDeTissu:{
        type:Number,
        required:true
    },
    nomDeTissu:{
        type:String,
        required:true
    },
    prixTotal:{
        type: Number,
        required:true
    },
    nomDuClient:{
        type: String,
        required: true
      },
      cel:{
        type: String,
        default: ""
      },
      email:{
        type: String,
        default: ""
      },
    addess:{
        type:String,
        default:""
    },
    consignes:{
        type:String,
        default:""
    },
    epaules:{
        type:String,
        default:""
    },
    bras:{
        type:String,
        default:""
    },
    poignet:{
        type:String,
        default:""
    },
    lgBras:{
        type:String,
        default:""
    },
    lgVeste:{
        type:String,
        default:""
    },
    poitrine:{
        type:String,
        default:""
    },
    ventre:{
        type:String,
        default:""
    },
    ceinture:{
        type:String,
        default:""
    },
    dos:{
        type:String,
        default:""
    },
    hanche:{
        type:String,
        default:""
    },
    entrejambe:{
        type:String,
        default:""
    },
    mollet:{
        type:String,
        default:""
    },
    chevilles:{
        type:String,
        default:""
    },
    cuisse:{
        type:String,
        default:""
    },
    genou:{
        type:String,
        default:""
    },
    lgJambe:{
        type:String,
        default:""
    },
    dateDeLivraison:{
        type: Date,
        require: true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const Commande = mongoose.model("Commande", CommandeSchema);

module.exports = Commande;
