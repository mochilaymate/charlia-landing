import nodemailer from 'nodemailer';

// Configura tu email aquí
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const business = formData.get('business');
    const automateGoals = formData.get('automateGoals');
    const challenges = formData.get('challenges');
    const crm = formData.get('crm');
    const additional = formData.get('additional');

    // Email para tu inbox
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'charlia.agency@gmail.com',
      subject: `Nueva solicitud de ${name} - ${business}`,
      html: `
        <h2>Nueva solicitud de agente WhatsApp</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Negocio:</strong> ${business}</p>
        <p><strong>Qué quiere automatizar:</strong></p>
        <p>${automateGoals}</p>
        <p><strong>Desafíos principales:</strong></p>
        <p>${challenges}</p>
        <p><strong>CRM:</strong> ${crm || 'No especificado'}</p>
        <p><strong>Información adicional:</strong></p>
        <p>${additional || 'Ninguna'}</p>
        <hr>
        <p><strong>Siguiente paso:</strong> Revisa esta solicitud y envia una propuesta personalizada al WhatsApp ${phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return Response.json({ error: 'Error procesando solicitud' }, { status: 500 });
  }
}
