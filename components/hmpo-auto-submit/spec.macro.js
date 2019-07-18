'use strict';

describe('hmpoAutoSubmit', () => {
    it('renders with default values', () => {
        const $ = render({ component: 'hmpoAutoSubmit', ctx: true });
        const $component = $('[data-module="hmpo-auto-submit"]');
        expect($component.attr('data-submit-delay')).to.equal('1000');
        expect($component.attr('data-help-delay')).to.equal('3000');
        expect($component.attr('data-manual-delay')).to.equal('30000');
        expect($('.hmpo-auto-submit__spinner img').attr('alt')).to.equal('[govuk.loading]');
        expect(cleanHtml($('.hmpo-auto-submit__html'))).to.equal('');
        expect(cleanHtml($('.hmpo-auto-submit__help'))).to.equal('');
        expect(cleanHtml($('.hmpo-auto-submit__manual'))).to.equal('<button type="submit" class="govuk-button button">[buttons.next]</button>');
    });

    it('renders with custom values', () => {
        const $ = render({ component: 'hmpoAutoSubmit', ctx: true, params: {
            helpDelay: 1234,
            manualDelay: 4567,
            submitDelay: 789,
            html: '<h1>foo</h1>',
            loader: { text: 'test' },
            help: { html: '<b>bar</b>' },
            manual: { html: '<i>manual</i>' }
        } });
        const $component = $('[data-module="hmpo-auto-submit"]');
        expect($component.attr('data-submit-delay')).to.equal('789');
        expect($component.attr('data-help-delay')).to.equal('1234');
        expect($component.attr('data-manual-delay')).to.equal('4567');
        expect($('.hmpo-auto-submit__spinner img').attr('alt')).to.equal('test');
        expect(cleanHtml($('.hmpo-auto-submit__html'))).to.equal('<h1>foo</h1>');
        expect(cleanHtml($('.hmpo-auto-submit__help'))).to.equal('<b>bar</b>');
        expect(cleanHtml($('.hmpo-auto-submit__manual'))).to.equal('<i>manual</i><button type="submit" class="govuk-button button">[buttons.next]</button>');
    });
});
