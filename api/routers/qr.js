import QRCode from 'qrcode';
import { PassThrough } from 'stream';
const express = require('express')

const router = express.Router()

router.get('/qr/:sesionId', async (req, res, next) => {
    try{
        const sesionId = req.params.sesionId;
        const url = `/${sesionId}/`

        const qrStream = new PassThrough();
        const result = await QRCode.toFileStream(qrStream, url,
            {
                type: 'png',
                width: 200,
                errorCorrectionLevel: 'H'
            }
        );

        qrStream.pipe(res);
    } catch(err){
        console.error('Failed to return content', err);
    }
})
