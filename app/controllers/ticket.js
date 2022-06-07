import TicketModel from '../models/ticket.js';

const Ticket = class Ticket{
    constructor(app, connect){
        this.app = app;
        this.TicketModel = connect.model('Ticket', TicketModel);

        this.run();
    }

    get(){
        this.app.get('/ticket/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.TicketModel.findById(req.params.id).then((ticket) => {
                    res.status(200).json(ticket || {});
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
        this.app.post('/ticket', (req, res) => {
            try{
                const TicketModel = new this.TicketModel(req.body);
                TicketModel.save().then((ticket) => {
                    res.status(200).json(ticket || {});
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
        this.app.delete('/ticket/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.TicketModel.deleteOne({ "_id": req.params.id }).then((ticket) => {
                    res.status(200).json(ticket || {});
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
        this.app.put('/ticket/:id', (req, res) => {
            try{
                if(!req.params.id){
                    res.status(400).json({
                        status: 400,
                        message: 'Bad request : Please use a id in the query string parameters'
                    });
                    return;
                }
                this.TicketModel.updateOne({ "_id": req.params.id },{ $set: req.body }).then((ticket) => {
                    res.status(200).json(ticket || {});
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

export default Ticket;