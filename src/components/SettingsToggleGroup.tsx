import { ThemeSwitch } from './theme/ThemeSwitch';
import LanguageSwitcher from './translate/LanguageSwitcher';
import { ButtonGroup } from './ui/button-group';

export function SettingsToggleGroup() {
  return (
    <ButtonGroup>
      <LanguageSwitcher />
      <ThemeSwitch />
    </ButtonGroup>
  );
}
