import { app } from '@azure/functions';
import './functions/sign-in';

app.setup({
    enableHttpStream: true,
});
