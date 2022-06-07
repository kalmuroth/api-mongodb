import ThreadModel from '../models/thread.js';

const Thread = class Thread{
    constructor(app, connect){
        this.app = app;
        this.ThreadModel = connect.model('Thread', ThreadModel);

        this.run();
    }

    get(){
        this.app.get('/thread/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.ThreadModel.findById(req.params.id).then((thread) => {
                    res.status(200).json(thread || {});
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
        this.app.post('/thread', (req, res) => {
            try{
                const ThreadModel = new this.ThreadModel(req.body);
                ThreadModel.save().then((thread) => {
                    res.status(200).json(thread || {});
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
        this.app.delete('/thread/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.ThreadModel.deleteOne({ "_id": req.params.id }).then((thread) => {
                    res.status(200).json(thread || {});
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
        this.app.get('/thread/add/id:', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.ThreadModel.updateMany({ _id: req.params.id }, {
                    $push: {
                      members: req.body.members
                    }
                  }, { upsert: true }).then((thread) => {
                    res.status(200).json(thread || {});
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

export default Thread;