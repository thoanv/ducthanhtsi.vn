<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a class="sidebar-brand brand-logo" href="{{route('dashboard')}}"><img
                style="width: calc(244px - 85px);  height: 50px" src="/assets/images/logo.png" alt="logo"/></a>
        <a class="sidebar-brand brand-logo-mini" href="{{route('dashboard')}}"><img
                style="width: calc(244px - 120px); width: 90%; height: 40px" src="/assets/images/logo-mini.png"
                alt="logo"/></a>
    </div>
    <ul class="nav">
        <li class="nav-item profile">
            <div class="profile-desc">
                <div class="profile-pic">
                    <div class="count-indicator">
                        <img class="img-xs rounded-circle " src="/assets/images/faces/man.png" alt="">
                        <span class="count bg-success"></span>
                    </div>
                    <div class="profile-name">
                        <h5 class="mb-0 font-weight-normal">{{Auth::user()->name}}</h5>
                        <span>Nhân viên</span>
                    </div>
                </div>
                <a href="#" id="profile-dropdown" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                     aria-labelledby="profile-dropdown">
                    <div class="dropdown-divider"></div>
                    <a href="{{route('changePasswordGet')}}" class="dropdown-item preview-item">
                        <div class="preview-thumbnail">
                            <div class="preview-icon bg-dark rounded-circle">
                                <i class="mdi mdi-onepassword  text-info"></i>
                            </div>
                        </div>
                        <div class="preview-item-content">
                            <p class="preview-subject ellipsis mb-1 text-small">Thay đổi mật khẩu</p>
                        </div>
                    </a>
                    <div class="dropdown-divider"></div>
                </div>
            </div>
        </li>
        <li class="nav-item menu-items {{ request()->is('/') ? 'active' : '' }}">
            <a class="nav-link" href="{{route('dashboard')}}">
              <span class="menu-icon">
                <i class="mdi mdi-speedometer"></i>
              </span>
                <span class="menu-title">Dashboard</span>
            </a>
        </li>

        <li class="nav-item menu-items {{ request()->is('admin/aboutUs/1/edit') ? 'active' : '' }}">
            <a class="nav-link" href="{{route('aboutUs.edit', 1)}}">
          <span class="menu-icon">
            <i class="mdi  mdi-information-outline"></i>
          </span>
                <span class="menu-title">Thông tin chung</span>
            </a>
        </li>
        @canany(['create', 'viewAny'], \App\Models\Employee::class)
        <li class="nav-item menu-items {{ (request()->is('admin/employees/*') || request()->is('admin/role/*')) ? 'active' : '' }}">
            <a class="nav-link" data-bs-toggle="collapse" href="#employees" aria-expanded="false" aria-controls="employees">
              <span class="menu-icon">
                <i class="mdi mdi-account-multiple"></i>
              </span>
                <span class="menu-title">Nhân viên</span>
                <i class="menu-arrow"></i>
            </a>
            <div
                class="collapse {{ (request()->is('admin/employees') || request()->is('admin/employees/create') || request()->is('admin/role/*')) ? 'show' : '' }}"
                id="employees">
                <ul class="nav flex-column sub-menu">
                    @can('viewAny', \App\Models\Employee::class)
                    <li class="nav-item"><a class="nav-link {{ (request()->is('admin/employees')) ? 'active' : '' }}"
                                            href="{{route('employees.index')}}">Danh sách</a></li>
                    @endcan
                    @can('create', \App\Models\Employee::class)
                    <li class="nav-item"><a class="nav-link {{ request()->is('admin/employees/create') ? 'active' : '' }}"
                                            href="{{route('employees.create')}}">Thêm mới</a></li>
                    @endcan
                </ul>
            </div>
        </li>
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Permission::class)
            <li class="nav-item menu-items {{ (request()->is('admin/permissions') || request()->is('admin/permissions/create') || request()->is('admin/type-permissions') || request()->is('type-permissions/create')) ? 'active' : '' }}">
                <a class="nav-link" data-bs-toggle="collapse" href="#permission" aria-expanded="false"
                   aria-controls="permission">
              <span class="menu-icon">
                <i class="mdi mdi-security"></i>
              </span>
                    <span class="menu-title">Phân quyền</span>
                    <i class="menu-arrow"></i>
                </a>
                <div
                    class="collapse {{ (request()->is('admin/permissions') || request()->is('admin/permissions/create') || request()->is('admin/type-permissions') || request()->is('admin/type-permissions/create')) ? 'show' : '' }}"
                    id="permission">
                    <ul class="nav flex-column sub-menu">
                        @can('viewAny', \App\Models\Permission::class)
                            <li class="nav-item"><a
                                    class="nav-link {{ (request()->is('admin/permissions')) ? 'active' : '' }}"
                                    href="{{route('permissions.index')}}">Danh sách</a></li>
                        @endcan
                        @can('create', \App\Models\Permission::class)
                            <li class="nav-item"><a
                                    class="nav-link {{ request()->is('admin/permissions/create') ? 'active' : '' }}"
                                    href="{{route('permissions.create')}}">Thêm mới</a></li>
                        @endcan
                        <li class="nav-item"><a class="nav-link {{ request()->is('admin/type-permissions') ? 'active' : '' }}"
                                                href="{{route('type-permissions.index')}}">Loại quyền</a></li>
                    </ul>
                </div>
            </li>
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Category::class)
        <li class="nav-item menu-items {{ (request()->is('admin/categories')||request()->is('admin/categories/*')) ? 'active' : '' }}">
            <a class="nav-link" data-bs-toggle="collapse" href="#categories" aria-expanded="false"
               aria-controls="categories">
              <span class="menu-icon">
                <i class="mdi mdi-dns"></i>
              </span>
                <span class="menu-title">Danh mục</span>
                <i class="menu-arrow"></i>
            </a>
            <div
                class="collapse {{ (request()->is('admin/categories') || request()->is('admin/categories/create') ||request()->is('admin/categories/*')) ? 'show' : ''}}"
                id="categories">
                <ul class="nav flex-column sub-menu">
                    @can( 'viewAny', \App\Models\Category::class)
                    <li class="nav-item"><a class="nav-link {{ (request()->is('admin/categories')) ? 'active' : '' }}"
                                            href="{{route('categories.index')}}"> Danh sách </a></li>
                    @endcan
                    @can( 'create', \App\Models\Category::class)
                    <li class="nav-item"><a class="nav-link {{ request()->is('admin/categories/create') ? 'active' : '' }}"
                                            href="{{route('categories.create')}}"> Thêm mới </a></li>
                    @endcan
                </ul>
            </div>
        </li>
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Menu::class)
            <li class="nav-item menu-items {{ (request()->is('admin/menus')||request()->is('admin/menus/*')) ? 'active' : '' }}">
                <a class="nav-link" data-bs-toggle="collapse" href="#menus" aria-expanded="false"
                   aria-controls="categories">
              <span class="menu-icon">
                <i class="mdi mdi-dns"></i>
              </span>
                    <span class="menu-title">Menu</span>
                    <i class="menu-arrow"></i>
                </a>
                <div
                    class="collapse {{ (request()->is('admin/menus') || request()->is('admin/menus/create') ||request()->is('admin/menus/*')) ? 'show' : ''}}"
                    id="menus">
                    <ul class="nav flex-column sub-menu">
                        @can( 'viewAny', \App\Models\Menu::class)
                            <li class="nav-item"><a class="nav-link {{ (request()->is('admin/menus')) ? 'active' : '' }}"
                                                    href="{{route('menus.index')}}"> Danh sách </a></li>
                        @endcan
                        @can( 'create', \App\Models\Menu::class)
                            <li class="nav-item"><a class="nav-link {{ request()->is('admin/menus/create') ? 'active' : '' }}"
                                                    href="{{route('menus.create')}}"> Thêm mới </a></li>
                        @endcan
                    </ul>
                </div>
            </li>
        @endcanany
        <li class="nav-item nav-category  pb-0">
            <span class="nav-link">Thương mại điện tử</span>
        </li>
        @canany(['create', 'viewAny'], \App\Models\Product::class)
            <li class="nav-item menu-items {{ (request()->is('admin/products')||request()->is('admin/products/*')) ? 'active' : '' }}">
                <a class="nav-link" data-bs-toggle="collapse" href="#products" aria-expanded="false"
                   aria-controls="products">
              <span class="menu-icon">
                <i class="mdi mdi-dns"></i>
              </span>
                    <span class="menu-title">Sản phẩm</span>
                    <i class="menu-arrow"></i>
                </a>
                <div
                    class="collapse {{ (request()->is('admin/products') || request()->is('admin/products/create') ||request()->is('admin/menus/*')) ? 'show' : ''}}"
                    id="products">
                    <ul class="nav flex-column sub-menu">
                        @can( 'viewAny', \App\Models\Product::class)
                            <li class="nav-item"><a class="nav-link {{ (request()->is('admin/products')) ? 'active' : '' }}"
                                                    href="{{route('products.index')}}"> Danh sách </a></li>
                        @endcan
                        @can( 'create', \App\Models\Product::class)
                            <li class="nav-item"><a class="nav-link {{ request()->is('admin/products/create') ? 'active' : '' }}"
                                                    href="{{route('products.create')}}"> Thêm mới </a></li>
                        @endcan
                    </ul>
                </div>
            </li>
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Origin::class)
            <li class="nav-item menu-items {{ (request()->is('admin/origins')||request()->is('admin/origins/*')) ? 'active' : '' }}">
                <a class="nav-link" data-bs-toggle="collapse" href="#origins" aria-expanded="false"
                   aria-controls="origins">
              <span class="menu-icon">
                <i class="mdi mdi-binoculars"></i>
              </span>
                    <span class="menu-title">Quốc gia</span>
                    <i class="menu-arrow"></i>
                </a>
                <div
                    class="collapse {{ (request()->is('admin/origins') || request()->is('admin/origins/create') ||request()->is('admin/origins/*')) ? 'show' : ''}}"
                    id="origins">
                    <ul class="nav flex-column sub-menu">
                        @can( 'viewAny', \App\Models\Origin::class)
                            <li class="nav-item"><a class="nav-link {{ (request()->is('admin/origins')) ? 'active' : '' }}"
                                                    href="{{route('origins.index')}}"> Danh sách </a></li>
                        @endcan
                        @can( 'create', \App\Models\Origin::class)
                            <li class="nav-item"><a class="nav-link {{ request()->is('admin/origins/create') ? 'active' : '' }}"
                                                    href="{{route('origins.create')}}"> Thêm mới </a></li>
                        @endcan
                    </ul>
                </div>
            </li>
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Trademark::class)
            <li class="nav-item menu-items {{ (request()->is('admin/trademarks')||request()->is('admin/trademarks/*')) ? 'active' : '' }}">
                <a class="nav-link" data-bs-toggle="collapse" href="#trademarks" aria-expanded="false"
                   aria-controls="trademarks">
              <span class="menu-icon">
                <i class="mdi mdi-elevator"></i>
              </span>
                    <span class="menu-title">Thương hiệu</span>
                    <i class="menu-arrow"></i>
                </a>
                <div
                    class="collapse {{ (request()->is('admin/trademarks') || request()->is('admin/trademarks/create') ||request()->is('admin/trademarks/*')) ? 'show' : ''}}"
                    id="trademarks">
                    <ul class="nav flex-column sub-menu">
                        @can( 'viewAny', \App\Models\Trademark::class)
                            <li class="nav-item"><a class="nav-link {{ (request()->is('admin/trademarks')) ? 'active' : '' }}"
                                                    href="{{route('trademarks.index')}}"> Danh sách </a></li>
                        @endcan
                        @can( 'create', \App\Models\Trademark::class)
                            <li class="nav-item"><a class="nav-link {{ request()->is('admin/trademarks/create') ? 'active' : '' }}"
                                                    href="{{route('trademarks.create')}}"> Thêm mới </a></li>
                        @endcan
                    </ul>
                </div>
            </li>
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Post::class)
            <li class="nav-item nav-category  pb-0">
                <span class="nav-link">Tin tức</span>
            </li>
            @can( 'viewAny', \App\Models\Post::class)
                <li class="nav-item menu-items {{ (request()->is('admin/posts')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('posts.index')}}">
                          <span class="menu-icon">
                            <i class="mdi mdi-format-list-bulleted-type"></i>
                          </span>
                        <span class="menu-title">Tin tức</span>
                    </a>
                </li>
            @endcan
            @can( 'create', \App\Models\Post::class)
                <li class="nav-item menu-items {{ (request()->is('admin/posts/create')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('posts.create')}}">
                        <span class="menu-icon">
                            <i class="mdi mdi-library-plus"></i>
                        </span>
                        <span class="menu-title">Thêm mới</span>
                    </a>
                </li>
            @endcan
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Slide::class)
            <li class="nav-item nav-category  pb-0">
                <span class="nav-link">Trình Slide</span>
            </li>
            @can( 'viewAny', \App\Models\Slide::class)
                <li class="nav-item menu-items {{ (request()->is('admin/slides')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('slides.index')}}">
                          <span class="menu-icon">
                            <i class="mdi mdi-playlist-play"></i>
                          </span>
                        <span class="menu-title">Danh sách</span>
                    </a>
                </li>
            @endcan
            @can( 'create', \App\Models\Slide::class)
                <li class="nav-item menu-items {{ (request()->is('admin/slides/create')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('slides.create')}}">
                        <span class="menu-icon">
                            <i class="mdi mdi-library-plus"></i>
                        </span>
                        <span class="menu-title">Thêm mới</span>
                    </a>
                </li>
            @endcan
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Banner::class)
            <li class="nav-item nav-category  pb-0">
                <span class="nav-link">Quản lý Banner</span>
            </li>
            @can( 'viewAny', \App\Models\Banner::class)
                <li class="nav-item menu-items {{ (request()->is('admin/banners')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('banners.index')}}">
                          <span class="menu-icon">
                            <i class="mdi mdi-playlist-play"></i>
                          </span>
                        <span class="menu-title">Danh sách</span>
                    </a>
                </li>
            @endcan
            @can( 'create', \App\Models\Banner::class)
                <li class="nav-item menu-items {{ (request()->is('admin/banners/create')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('banners.create')}}">
                        <span class="menu-icon">
                            <i class="mdi mdi-library-plus"></i>
                        </span>
                        <span class="menu-title">Thêm mới</span>
                    </a>
                </li>
            @endcan
        @endcanany
        @canany(['create', 'viewAny'], \App\Models\Contact::class)
            <li class="nav-item nav-category  pb-0">
                <span class="nav-link">Liên hệ</span>
            </li>
            @can( 'viewAny', \App\Models\Contact::class)
                <li class="nav-item menu-items {{ (request()->is('contacts')) ? 'active' : '' }}">
                    <a class="nav-link" href="{{route('contacts.index')}}">
                          <span class="menu-icon">
                            <i class="mdi mdi-playlist-play"></i>
                          </span>
                        <span class="menu-title">Danh sách</span>
                    </a>
                </li>
            @endcan

        @endcanany
    </ul>
</nav>
