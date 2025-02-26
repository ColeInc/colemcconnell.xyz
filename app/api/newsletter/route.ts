import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const requestBody = {
      email,
      double_opt_override: "on"
    };

    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
    const apiUrl = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;

    console.log('Newsletter subscription request:', {
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: requestBody
    });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to subscribe';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = response.statusText || errorMessage;
      }

      console.error('Beehiiv API error:', {
        status: response.status,
        statusText: response.statusText,
        errorMessage
      });

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const successData = await response.json();
    console.log("Beehiiv API success response:", successData);
    
    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 