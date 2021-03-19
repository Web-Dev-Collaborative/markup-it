/** @jsx h */
import h from '../../../hyperscript';

export default (
    <document>
        <paragraph>
            <html
                closingTag="</p>"
                innerHtml='Hello <a href="https://www.google.com">World</a> !'
                openingTag="<p>"
            />
        </paragraph>
    </document>
);
