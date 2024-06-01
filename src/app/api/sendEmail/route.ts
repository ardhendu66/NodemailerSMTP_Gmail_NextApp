import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/utils/mailer/route";

export async function POST(request: NextRequest) {
    const { name, email } = await request.json();
    console.log(name, email);
    if(!name && !email) {
        return NextResponse.json({status: 400, message: "Bad Request"});
    }

    try {
        const res = await transporter.sendMail(mailOptions);
        if(res.accepted) {
            console.log('Email sent successfully'); 
            return NextResponse.json({
                status: 200, 
                message: 'Email sent successfully'
            })           
        }
        else if(res.rejected) {
            console.log('Email sent failed'); 
            return NextResponse.json({
                status: 400, 
                message: 'Email sent failed'
            })            
        }
    }
    catch(err: any) {
        console.error(err.message);        
        return NextResponse.json({status: 400, message: err.message});
    }
}