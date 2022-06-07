import AlbumModel from '../models/album.js';

const Album = class Album{
    constructor(app, connect){
        this.app = app;
        this.AlbumModel = connect.model('Album', AlbumModel);

        this.run();
    }

    get(){
        this.app.get('/album/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.AlbumModel.findById(req.params.id).then((album) => {
                    res.status(200).json(album || {});
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
        this.app.post('/album', (req, res) => {
            try{
                const AlbumModel = new this.AlbumModel(req.body);
                AlbumModel.save().then((album) => {
                    res.status(200).json(album || {});
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
        this.app.delete('/album/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.AlbumModel.deleteOne({ "_id": req.params.id }).then((album) => {
                    res.status(200).json(album || {});
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
        this.app.get('/album/add/id:', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.AlbumModel.updateMany({ _id: req.params.id }, {
                    $push: {
                      members: req.body.members
                    }
                  }, { upsert: true }).then((album) => {
                    res.status(200).json(album || {});
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

export default Album;