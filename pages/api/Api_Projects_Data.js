import {
    projects_Data
} from '../../Data/projects_Data'

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            res.status(200).json(projects_Data);
            break
        case "POST":
            let temp = projects_Data.filter((project) => project.project_ID === req.body.project_ID)[0]
            res.status(200).json(temp);
            break;
        default:
            res.status(400).json({
                text: "error"
            });
            break;
    }
}