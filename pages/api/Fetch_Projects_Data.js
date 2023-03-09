import Projects_obj from "../../Data/Projects_obj"

export default function handler(req, res) {
    res.status(200).json(Projects_obj().data )
  }