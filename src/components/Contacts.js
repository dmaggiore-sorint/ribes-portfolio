import { Button, Grid, TextField } from "@mui/material";
import { contacts } from "../portfolio";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h3>{contacts?.title}</h3>
      <p className="contacts__description">{contacts?.description}</p>
      <div className="contacts__form">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id="name"
                label="Full name"
                variant="outlined"
                size="small"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Contattami!</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
