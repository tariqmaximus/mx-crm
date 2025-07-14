import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DashboardComponent } from '../../sections/dashboard/dashboard.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SideBarComponent } from '../../components/sidebar/sidebar.component';
import { ThemeService } from '../../theme.service';
import { MessagesComponent } from '../../sections/messages/messages.component';
import { ProfileComponent } from '../../sections/profile/profile.component';
import { LogComponent } from '../../sections/log/log.component';
import { NotificationsComponent } from '../../sections/notifications/notifications.component';
import { TeamsComponent } from "../../sections/teams/teams.component";
import { LeadsComponent } from "../../sections/leads/leads.component";
import { BacklogComponent } from "../../sections/backlog/backlog.component";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    MessagesComponent,
    ProfileComponent,
    LogComponent,
    NotificationsComponent,
    TeamsComponent,
    LeadsComponent,
    BacklogComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'PHR-code';
  headerTitle: string = 'Home'; // ✅ Set initial value before view renders
  private observer: MutationObserver | null = null;
  private isBrowser: boolean;

  private validTabIds = [
    'home',
    'hospitalvisits',
    'lab-summary',
    'messages',
    'profile',
    'log',
    'notifications',
  ];

  constructor(
    private themeService: ThemeService,
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // ✅ This ensures the value is stable before first change detection
    this.headerTitle = 'Home';
  }

  toggleMenu(): void {
    if (this.isBrowser) {
      const mainMenu = document.getElementById('main-menu');
      if (mainMenu) {
        mainMenu.classList.toggle('close-menu');
      }
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      document.addEventListener('click', this.handleTabLinkClick.bind(this));

      const target = document.querySelector('.some-element');
      if (target && typeof MutationObserver !== 'undefined') {
        this.observer = new MutationObserver(() => {
          // Optional: Mutation logic
        });
        this.observer.observe(target, { childList: true, subtree: true });
      }
    }
  }

  handleTabLinkClick(event: Event): void {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

    if (anchor) {
      const tabId = anchor.getAttribute('href')?.substring(1);
      if (tabId && this.validTabIds.includes(tabId)) {
        this.activateTab(tabId);
        event.preventDefault();
      }
    }
  }

  activateTab(tabId: string): void {
    const tabPanels = this.elRef.nativeElement.querySelectorAll('.tab-panel');
    tabPanels.forEach((panel: HTMLElement) => {
      panel.classList.toggle('active', panel.id === tabId);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this.isBrowser) {
      document.removeEventListener('click', this.handleTabLinkClick as any);
    }
  }

  onTitleChange(newTitle: string): void {
    this.headerTitle = newTitle;
  }
}
