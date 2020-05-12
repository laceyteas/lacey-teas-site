import React from 'react';

import Layout from '../common/layouts/Layout/Layout';
import Page from '../common/layouts/Page/Page';
import Seo from '../common/seo';

export default () => (
  <Layout>
    <Seo
      title="styleguide"
      description="styleguide" />
    <Page 
      title="Styleguide" 
    >
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <ul>
            <li>unordered list</li>
            <li>unordered list</li>
            <li>unordered list</li>
        </ul>
        <ol>
            <li>unordered list</li>
            <li>unordered list</li>
            <li>unordered list</li>
        </ol>
        <p>paragragh Lorem ipsum dolor with a <a href="https://www.google.com">link</a></p>
        <blockquote>blockquote Lorem ipsum dolor</blockquote>
        <table>
            <thead>
                <tr>
                    <th>head</th><th>head</th>
                </tr>
            </thead>
            <tbody>
                <tr> <td>table</td><td>table</td>  </tr>
            <tr>
                <td>table</td><td>table</td>
            </tr>
            </tbody>
        </table>
    </Page>
  </Layout>
)