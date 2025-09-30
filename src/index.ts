import { app } from '@azure/functions';
import './functions/sign-in';
import './functions/sign-up';
import './functions/users';

app.setup({
    enableHttpStream: true,
});
