import app from '../../../../app';
import loadTemplate from '../../../../utils/loadTemplate';
import baseVw from '../../../baseVw';

export default class extends baseVw {
  constructor( options = { } ) {
    super( options );

    this.options = options;
    this.settings = app.settings.clone( );
  }

  getFormData( ) {
    return super.getFormData( this.$formFields );
  }

  render( ) {
    loadTemplate('modals/settings/advanced/appearance.html', (t) => {
      this.$el.html(t({
        errors : {},
        ...this.settings.toJSON().appearanceSettings
      }));

      this.$formFields = this.$('select[name], input[name]');
    });

    return this;
  }
}
