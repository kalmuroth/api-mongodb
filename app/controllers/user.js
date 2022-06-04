import UserModel from '../models/user.js';

const User = class User{
    constructor(app, connect){
        this.app = app;
        this.UserModel = connect.model('User', UserModel);

        this.run();
    }

    get(){
        this.app.get('/user/get/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.UserModel.findById(req.parmas.id).then((user) => {
                    res.status(200).json(user || {});
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
        this.app.post('/user/create', (req, res) => {
            try{
                const UserModel = new this.UserModel(req.body);
                UserModel.save().then((user) => {
                    res.status(200).json(user || {});
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
        this.app.delete('/user/delete/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.UserModel.deleteOne({ "_id": req.params.id }).then((user) => {
                    res.status(200).json(user || {});
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
    }
}

export default User;