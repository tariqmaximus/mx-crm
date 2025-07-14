import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ThemeService } from '../../theme.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ ],
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  @Input() pageTitle: string = 'Home';
  toggleMenu() {
    this.menuToggle.emit();
  }
  
  // Inject service
  constructor(private themeService: ThemeService) {}

  // Menu items used by <app-dropdown>
  menuItems = [
    { label: 'Profile', action: 'profile' },
    { label: 'Settings', link: '/settings' },
    { label: 'Logout', link: '/logout' }
  ];

  // Handle menu item click (action)
  onDropdownItemClick(action: string) {
    if (action === 'profile') {
      // Call whatever logic you use to activate the "Profile" tab
      this.setActiveTab('profile');
    }
  }

  // Example tab switch logic
  setActiveTab(tab: string) {
    console.log(`Switching to tab: ${tab}`);
    // Your logic to activate the tab goes here
    // Could be state change, EventEmitter, shared service, etc.
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }
}
