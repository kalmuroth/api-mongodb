import EventModel from '../models/event.js';

const Event = class Event{
    constructor(app, connect){
        this.app = app;
        this.EventModel = connect.model('Event', EventModel);

        this.run();
    }

    get(){
        this.app.get('/event/get/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.EventModel.findById(req.parmas.id).then((event) => {
                    res.status(200).json(event || {});
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
        this.app.post('/event/create', (req, res) => {
            try{
                const EventModel = new this.EventModel(req.body);
                EventModel.save().then((event) => {
                    res.status(200).json(event || {});
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
        this.app.delete('/event/delete/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.EventModel.deleteOne({ "_id": req.params.id }).then((event) => {
                    res.status(200).json(event || {});
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

    add(){
        this.app.get('/event/add/id:', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.EventModel.updateMany({ _id: req.params.id }, {
                    $push: {
                      members: req.body.members
                    }
                  }, { upsert: true }).then((event) => {
                    res.status(200).json(event || {});
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
        this.add();
    }
}

export default Event;