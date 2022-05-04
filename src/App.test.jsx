import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import App from './App';

it('should get a list of rick and morty characters', async () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )

    const loading = screen.getByText(/Loading Pickle Rick/i);
    await waitForElementToBeRemoved(loading);
    await screen.findByText('Morty Smith');

})

it('should take you to the detail page', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )
    
    const detail = await screen.findByText(/abradolf lincler/i);
    userEvent.click(detail);
    await waitForElementToBeRemoved(screen.getByText(/loading character.../i));
    await screen.findByText('Location: Testicle Monster Dimension')
})