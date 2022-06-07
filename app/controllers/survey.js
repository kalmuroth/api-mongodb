import SurveyModel from '../models/survey.js';

const Survey = class Survey{
    constructor(app, connect){
        this.app = app;
        this.SurveyModel = connect.model('Survey', SurveyModel);

        this.run();
    }

    get(){
        this.app.get('/survey/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.SurveyModel.findById(req.params.id).then((survey) => {
                    res.status(200).json(survey || {});
                }).catch((err) => {
                    res.status(400).json({
                        status:400,
                        message: err
                    });
                });    
        
            }catch(err){
                res.status(400).json({
                    status:400,
                    message: err
                });
            }
        });
    }

    create(){
        this.app.post('/survey', (req, res) => {
            try{
                const SurveyModel = new this.SurveyModel(req.body);
                SurveyModel.save().then((survey) => {
                    res.status(200).json(survey || {});
                }).catch((err) => {
                    res.status(400).json({
                      status: 400,
                      message: err
                    });
                  });
            } catch (err) {
                res.status(400).json({
                status: 400,
                message: err
                })
            }
        });
    }
    
    delete(){
        this.app.delete('/survey/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.SurveyModel.deleteOne({ "_id": req.params.id }).then((survey) => {
                    res.status(200).json(survey || {});
                }).catch((err) => {
                    res.status(400).json({
                        status:400,
                        message: err
                    });
                });    
        
            }catch(err){
                res.status(400).json({
                    status:400,
                    message: err
                });
            }
        });
    }

    update(){
        this.app.put('/survey/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.SurveyModel.updateOne({ "_id": req.params.id },{ $set: req.body }).then((survey) => {
                    res.status(200).json(survey || {});
                }).catch((err) => {
                    res.status(400).json({
                        status:400,
                        message: err
                    });
                });    
        
            }catch(err){
                res.status(400).json({
                    status:400,
                    message: err
                });
            }
        });
    }

    run(){
        this.get();
        this.create();
        this.delete();
        this.update();
    }
}

export default Survey;