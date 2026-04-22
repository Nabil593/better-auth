import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const DashboardPage = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session);

    const user = session?.user

    if(!user) {
        redirect("/auth/signin")
        return <div>Pleace Sign in to the dashboard</div>
    }


    return (
        <div>
            <h1>This is a DashBoard Page!</h1>
        </div>
    );
};

export default DashboardPage;