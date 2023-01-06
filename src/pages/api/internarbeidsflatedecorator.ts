import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<string>
) {
    // TODO: sjekk miljø
    res.redirect(`internarbeidsflatedecorator-q0.dev-fss-pub.nais.io/internarbeidsflatedecorator/v2.1/static/js/head.v2.min.js`);
}