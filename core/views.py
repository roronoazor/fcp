from django.shortcuts import render


def index(request):
    context = {
    }
    return render(request, 'index.html', context)

def about(request):
    context = {
    }
    return render(request, 'about-us.html', context)

def expertise(request):
    context = {
    }
    return render(request, 'expertise.html', context)

def sector(request):
    context = {
    }
    return render(request, 'sector.html', context)

def transactions(request):
    context = {
    }
    return render(request, 'transactions.html', context)

def team(request):
    context = {
    }
    return render(request, 'team.html', context)

def locations_and_contacts(request):
    context = {
    }
    return render(request, 'locations-and-contact.html', context)