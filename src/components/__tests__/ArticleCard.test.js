import { render, screen } from '@testing-library/react';
import ArticleCard from '../ArticleCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ArticleCard', () => {
    test('Card displays the article name', () => {
        render(
            <Router>
                <ArticleCard name="test" />
            </Router>
        );
        const linkElement = screen.getByText('test');
        expect(linkElement).toBeInTheDocument();
    });
});
