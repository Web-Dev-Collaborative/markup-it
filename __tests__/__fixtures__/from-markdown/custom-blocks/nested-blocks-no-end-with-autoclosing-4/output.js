/** @jsx h */
import h from '../../../hyperscript';

export default (
    <document>
        <x-method>
            <paragraph>Logging</paragraph>
            <paragraph>Watch the tutorial here:</paragraph>
            <block
                type="x-youtube"
                isVoid
                data={{ src: 'https://www.youtube.com/watch?v=XXXXXXX' }}
            />
            <x-sample lang="js">
                <code_block syntax="js">
                    <code_line>{"console.log('This is a sample');"}</code_line>
                </code_block>
            </x-sample>
            <x-sample lang="go">
                <code_block syntax="go">
                    <code_line>{'fmt.Println("This is a sample")'}</code_line>
                </code_block>
            </x-sample>
        </x-method>
    </document>
);
